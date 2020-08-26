var dict = {
    'A' : ['adept', 'agreeable', 'alert', 'alluring', 'amazing', 'ambitious', 'amusing', 'attentive', 'awesome'],
    'B' : ['boundless', 'brave', 'bright'],
    'C' : ['calm', 'capable', 'charming', 'cheerful', 'clever', 'coherent', 'comfortable', 'confident', 'conscientious', 'considerat', 'consistent', 'cooperative', 'courageous', 'creative', 'credible', 'cultured'],
    'D' : ['dashing', 'dazzling', 'debonair', 'decisive', 'decorous', 'delightful', 'detailed', 'determined', 'diligent', 'discerning', 'discreet', 'dynamic'],
    'E' : ['eager', 'eclectic', 'efficient', 'elated', 'eminent', 'enchanting', 'encouraging', 'endurable', 'energetic', 'enterprising', 'entertaining', 'enthusiastic', 'excellent', 'excited', 'exclusive', 'exuberant'],
    'F' : ['fabulous', 'fair', 'faithful', 'fantastic', 'fearless', 'fine', 'frank', 'friendly', 'funny'],
    'G' : ['generous', 'gentle', 'glorious', 'good', 'groundbreaking'],
    'H' : ['happy', 'hard-working', 'harmonious', 'helpful', 'hilarious', 'honorable'],
    'I' : ['impartial', 'ingenious', 'insightful', 'inventive', 'industrious', 'inscrutable', 'instinctive'],
    'J' : ['jolly', 'joyous'],
    'K' : ['kind', 'kind-hearted', 'knowledgeable'],
    'L' : ['level', 'likeable', 'lively', 'logical', 'lovely', 'loving', 'loyal', 'lucky'],
    'M' : ['mature', 'meticulous', 'modern', 'multi-talented'] ,
    'N' : ['nice'] ,
    'O' : ['obedient', 'optimistic', 'organized'],
    'P' : ['painstaking', 'peaceful', 'perceptive', 'perfect', 'persistent', 'placid', 'plausible', 'pleasant', 'plucky', 'productive', 'professional', 'protective', 'proud', 'punctual'],
    'Q' : ['quiet'],
    'R' : ['receptive', 'reflective', 'reliable', 'relieved', 'resolute', 'responsible', 'rhetorical', 'righteous', 'robust', 'romantic'],
    'S' : ['sedate', 'seemly', 'selective', 'self-assured', 'sensitive', 'sharp', 'shrewd', 'silly', 'sincere', 'skillful', 'smart', 'smiling', 'sophisticated', 'splendid', 'steadfast', 'stimulating', 'strategic', 'studious', 'successful', 'succinct'],
    'T' : ['talented', 'thoughtful', 'thrifty', 'tough', 'trustworthy'],
    'U' : ['unbiased', 'unprecedented', 'unusual', 'upbeat'],
    'V' : ['vigorous', 'vivacious'] ,
    'W' : ['warm', 'willing', 'wise', 'witty', 'wonderful'],
    'X' : ['Xenodochial', 'Xenophilic'],
    'Y' : ['Young', 'Youthful'],
    'Z' : ['zealful', 'zazzy', 'zappy', 'zany', 'zaftig']
}
function well(str){
    var cars = new Array();
    for (var x = 0; x < str.length; x++)
    {
    var c = str.charAt(x);
    cars[x] = (c + "   :   "+dict[c][Math.floor(Math.random() * dict[c].length)].toUpperCase()+"<br>");
    }
    document.getElementById('out').innerHTML = cars.join("");
}
function fn1(){
    var uu = document.getElementById("text1");
	//display download button
	document.getElementById("dbtn").style.display="block";
    var str = uu.value;
    var l = /^[A-Za-z]+$/;
    if(str.match(l) && str.length < 15)
        {
            uu.style.border = "solid 1px black";
            well(str.toUpperCase());
        }
    else
        {
            uu.style.border = "solid 3px red"
            var tr="Plz enter valid name";
            document.getElementById('out').innerHTML=tr;
        }
}