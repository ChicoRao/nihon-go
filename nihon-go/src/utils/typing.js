export const hiraganaToRomaji = {"あ":["a"],"い":["i","yi"],"う":["u"],"え":["e"],"お":["o"],
                        "か":["ka"],"き":["ki"],"く":["ku"],"け":["ke"],"こ":["ko"],
                        "きゃ":["kya"],"きゅ":["kyu"],"きょ":["kyo"],
                        "が":["ga"],"ぎ":["gi"],"ぐ":["gu"],"げ":["ge"],"ご":["go"],
                        "ぎゃ":["gya"],"ぎゅ":["gyu"],"ぎょ":["gyo"],
                        "さ":["sa"],"し":["shi"],"す":["su"],"せ":["se"],"そ":["so"],
                        "ざ":["za"],"じ":["zi","ji"],"ず":["zu"],"ぜ":["ze"],"ぞ":["zo"],
                        "しゃ":["sya","sha"],"しゅ":["syu","shu"],"しょ":["syo","sho"],
                        "じゃ":["ja","jya"],"じゅ":["zyu","ju","jyu"],"じぇ":["je","jye"],"じょ":["zyo","jo","jyo"],
                        "た":["ta"],"ち":["ti","chi"],"つ":["tsu"],"て":["te"],"と":["to"],
                        "ちゃ":["cha","cya"],"ちゅ":["chu","cyu"],"ちょ":["cho","cyo"],
                        "だ":["da"],"ぢ":["di","ji"],"づ":["du","zu"],"で":["de"],"ど":["do"],
                        "ぢゃ":["dya","ja"],"ぢゅ":["dyu","ju"],"ぢょ":["dyo","jo"],
                        "な":["na"],"に":["ni"],"ぬ":["nu"],"ね":["ne"],"の":["no"],
                        "にゃ":["nya"],"にゅ":["nyu"],"にょ":["nyo"],
                        "は":["ha"],"ひ":["hi"],"ふ":["hu","fu"],"へ":["he"],"ほ":["ho"],
                        "ひゃ":["hya"],"ひゅ":["hyu"],"ひょ":["hyo"],
                        "ば":["ba"],"び":["bi"],"ぶ":["bu"],"べ":["be"],"ぼ":["bo"],
                        "びゃ":["bya"],"びゅ":["byu"],"びょ":["byo"],
                        "ぱ":["pa"],"ぴ":["pi"],"ぷ":["pu"],"ぺ":["pe"],"ぽ":["po"],
                        "ぴゃ":["pya"],"ぴゅ":["pyu"],"ぴょ":["pyo"],
                        "ま":["ma"],"み":["mi"],"む":["mu"],"め":["me"],"も":["mo"],
                        "みゃ":["mya"],"みゅ":["myu"],"みょ":["myo"],
                        "や":["ya"],"ゆ":["yu"],"よ":["yo"],
                        "ら":["ra"],"り":["ri"],"る":["ru"],"れ":["re"],"ろ":["ro"],
                        "りゃ":["rya"],"りゅ":["ryu"],"りょ":["ryo"],
                        "わ":["wa"],"を":["wo"],
                        "ん":["n"]};

function random(arr) {
    return arr[Math.floor(Math.random()*arr.length)];
}

export const generate = (count = 50) => {
    let hiraganaList = Object.keys(hiraganaToRomaji);
    // console.log(hiraganaList);
    // console.log(hiraganaToRomaji[hiraganaList[hiraganaList*Math.random() << 0]]);

    return new Array(count).fill().map(_ => random(hiraganaList));
}
