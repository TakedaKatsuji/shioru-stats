#プログラムの例
import ollama

res = ollama.chat(
    model="llava:7b", #モデル名を指定（llava:7b）
    messages=[{
        'role': 'user',
        'content': 'この画像には何が写っていますか？', #質問文（日本語でも動いた）
        'images': ['/home/katsuji/project/shioru-stats/src/.vuepress/public/shioru-logo.png'] #画像パス
    }]
)

#回答を出力
print(res['message']['content'])