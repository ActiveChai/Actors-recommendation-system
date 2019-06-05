import sys
import json
import xlrd
from gensim import models
from QcloudApi.qcloudapi import QcloudApi


class wordInfo:
    def __init__(self, info):
        self.word = info[0]
        self.postag = info[1]
        self.meanSize = info[2]
        self.meanNum = info[3]
        self.mainEmotion = info[4]
        self.mainStrength = info[5]
        self.mainPolarity = info[6]
        if (len(info) > 7):
            self.auxiliaryEmotion = info[7]
            self.auxiliaryStrength = info[8]
            self.auxiliaryPolarity = info[9]
        else:
            self.auxiliaryEmotion = None
            self.auxiliaryStrength = None
            self.auxiliaryPolarity = None


class movies:
    def __init__(self, mo, data, content):
        self._content = content
        self.Post()
        self._result = {}

        self._data = data
        self._model = mo
        self._result = self.analysis()

    def getResult(self):
        return self._result

    def getNearKeys(self, word):
        try:
            res = self._model.most_similar(word, topn=10)
            return res
        except Exception:
            # print('There is an error')
            return []

    def Post(self):
        module = 'wenzhi'
        action = 'TextDependency'
        config = {
            'method': 'GET',
            'Region': 'ap-shanghai',
            'secretId': 'AKID67xY021Y6NXXM2vJv79KLBtLcjhWI3zk',
            'secretKey': 'CJPLzYUIF4892MNH1e9ScdWUI1c1IWce',
            'SignatureMethod': 'HmacSHA1'
        }
        params = {'content': self._content, 'code': 0x00200000, 'type': 4}
        service = QcloudApi(module, config)
        url = service.generateUrl(action, params)
        response = service.call(action, params)
        self._responses = json.loads(response)['keywords']

    def GetPersonFormParagraph(self):
        person = []
        for response in self._responses:
            for word in response:
                if word['postag'] == 'nr':
                    person.append(word['word'])
        return person

    def getName(self, sentence):
        names = []
        while True:
            index = sentence.find('（')
            if index == -1:
                break
            index2 = sentence.find('）')
            name = sentence[index + 1:index2 - 2]
            names.append(name)
            sentence = sentence[0:index] + sentence[index2 + 1:]
        return names

    def analysis(self):
        for i in range(len(self._responses)):
            response = self._responses[i]
            person = []
            for word in response:
                if word['postag'] == 'nr':
                    person.append(word['word'])
            if len(person) > 0:
                keys = self.getKey(response)
                nearKeys = []
                for key in keys:
                    nearKeys.append((key['word'], 1))
                    res = self.getNearKeys(key['word'])
                    for temp in res:
                        if float(temp[1]) > 0.6:
                            nearKeys.append(temp)
                emotion = self.getEmotion(nearKeys)
                emotion['count'] = 1
                for k in range(len(person)):
                    score = self._result.get(person[k],None)
                    if score == None:
                        self._result[person[k]] = emotion
                    else:
                        for emo in ['PA', 'PE', 'PD', 'PH', 'PG', 'PB', 'PK', 'NA', 'NB', 'NJ', 'NH', 'PF', 'NI', 'NC', 'NG', 'NE', 'ND', 'NN', 'NK', 'NL', 'PC','count']:
                            score[emo] = float(score.get(emo,0)) + float(emotion.get(emo,0))
                            self._result[person[k]] = score
        result = {}
        result['result'] = self._result
        return result


    def getEmotion(self, nearKeys):
        emotion = {}
        for key in nearKeys:
            try:
                data = self._data[key[0]]
                try:
                    temp = float(emotion[data.mainEmotion])
                    emotion[data.mainEmotion] = temp + \
                        float(data.mainStrength) * float(key[1])
                except:
                    emotion[data.mainEmotion] = float(
                        data.mainStrength) * float(key[1])
            except:
                pass
        return emotion

    def getKey(self, response):
        key = []
        for word in response:
            if word['postag'] == 'i':  # 成语
                key.append(word)
            elif word['dep_rel'] == 'ATT':  # 定中关系
                if word['postag'] == 'n':
                    key.append(word)
                elif word['postag'] == 'a':
                    key.append(word)
                else:
                    father_id = int(word['father_id'])
                    father = response[father_id - 1]
                    if father['postag'] == 'w':
                        key.append(word)
            elif word['dep_rel'] == 'VOB':  # 动宾关系
                if word['postag'] == 'n' or word['postag'] == 'v':
                    key.append(word)
                else:
                    father_id = int(word['father_id'])
                    father = response[father_id - 1]
                    if father['dep_rel'] == 'ATT' or father['dep_rel'] == 'VOB':
                        key.append(word)
            elif word['dep_rel'] == 'HED':  # 核心关系
                father_id = int(word['father_id'])
                father = response[father_id - 1]
                if father['postag'] == 'r' or father['postag'] == 'nr':
                    key.append(word)
            elif word['dep_rel'] == 'ADV':  # 状中关系
                if word['postag'] == 'd' or word['postag'] == 'ad':
                    father_id = int(word['father_id'])
                    father = response[father_id - 1]
                    if father['postag'] == 'w':
                        key.append(word)
        return key


def get_data(filename='data.xlsx'):
    data = {}
    wb = xlrd.open_workbook(filename=filename)
    sheet = wb.sheet_by_name('data')  # 获取表
    for i in range(sheet.nrows):
        word = sheet.row_values(i)
        temp = wordInfo(word)
        data[word[0]] = temp
    return data


summary = sys.argv[1]
# summary = '爱德华生性热爱自由，成年之后，他选择离开家乡，踏上了环游世界的旅程。一路上，爱德华遇见了各种各样稀奇古怪的角色，经历了无数精彩绝伦的的冒险，而他日后最大的兴趣，就是向他人喋喋不休的重复讲述他的这一段奇幻旅程。威尔是爱德华的儿子，他并不相信父亲所讲述的那些光怪陆离的故事，甚至对此感到无比厌烦。婚后，他同父亲中断了联系，一晃眼就是数年过去。当再次得到爱德华的消息之时，威尔才知道父亲即将不久于人世，他决定去见爱德华最后一面。然而，这一次，威尔终于发现了隐藏在这些故事背后的奥秘和真相。'
mo = models.Word2Vec.load("./wiki_corpus.model")  # 这里路径要改
data = get_data()
movie = movies(mo, data, summary)
print(movie.getResult())

# movie = movies(cnn,
#     '中国航天员刘培强（吴京 饰）在儿子刘启四岁那年前往国际空间站，和国际同侪肩负起领航者的重任。转眼刘启（屈楚萧 饰）长大，他带着妹妹朵朵（赵今麦 饰）偷偷跑到地表，偷开外公韩子昂（吴孟达 饰）的运输车，结果不仅遭到逮捕，还遭遇了全球发动机停摆的事件。')
