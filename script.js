let btn = document.getElementById("searchBtn");
let txtbox = document.getElementById("searchBox");
let testTxt = document.getElementById("testText");
let keyWords = [
    "the gay and the furry", //0
    "the spelling bee", //1
    "kisses", //2
    "calls", //3
    "hangouts", //4
    "school", //5
    "important to you", //6
    "mirrors", //7
    "tet", //8
    "letter",//9
    "Birthday letter",//10
    "365" // 11
];

const imageCounts = { 
    0: 5,
    1: 8,
    2: 6,
    3: 9,
    4: 15,
    5: 24,
    6: 1,
    7: 4,
    8: 6,
    9: 1
}



btn.onclick = function() {
    searchInput = txtbox.value;
    console.log("Answer: "+searchInput);
    console.log("Array length: "+keyWords.length)
    let html = "";
    for (let i = 0; i <= keyWords.length; i++){
        console.log("Checking")
        if (searchInput == keyWords[i]){
            let correct = true
            console.log(keyWords[i])
            console.log(correct)
            let imgSet = i // define imgSet as a number for use of the images.
            console.log(imgSet)
            if (keyWords[i] == "365"){
                            console.log("it is "+keyWords[i])
                            html += "<p>Dear mao. Right now, this is the evening after you've given me your amazing gift and letter. And my letter and gifts, in your words, pale in comparison to yours. I’ve never been a very good person to you, I think. I’ve made you cry to many more times than what should’ve been 0. Including today. But this is an addition to my letter for you. Not an apology letter. So here goes. </p> <p>I feel warm tears falling down my face as I think about the day you gave me today. My snot slides down as I think of your words and your gifts and your bright brilliance. I worry I’ll repeat myself here what I said in the letter I assume is in your hands now. Having read your letter, I see I could never be as great as your ‘English lexicon’, and that my letter wasn’t enough. So this was the first thing I thought of. Of course, still not as amazing as your letter. Which is now safely kept in the treasure box under my bed with your 100 day anniversary letter for me. I have set myself a due date, which is until my gift for you arrives. I don’t know when that will be so I will try and write out all my heart now and fix it up later since this’ll be rough. </p> <p>As I look at the blue butt of Garry that now hangs on my walls, I smile. I always smile. Last night eating dinner, when we had our rings swapped, I noticed that they were swapped and when I felt it, I smiled. I just got a spark of happy. Thinking of you in the other side of the red string connected to our rings. Today afterschool, after I had read ur letters and you had left, I was weeping on the floor and drooling snots and tears of joy. Utter, utter joy. Unspeakable, indescribable happiness that left me dumbfounded and smiling wondering what I could have possible done to be so lucky to love someone so…. So.... exactly you. I sat and unboxed by tarot cards and smiled. I hung my keychains and cried and smiled to myself. I kissed all the paper kisses back because I couldn’t leave them all unreturned. And I was so very happy. I am always so happy in anything with you. Talking about house football with you I had so much fun. So much fun every single day. Every single precious and golden day. All I say probably doesn’t mean much to you. But I just need to tell you, I giggled when I spelled out ‘kitty. Hearing you call me that warms my heart. I laughed a bit I think reading you call yourself Pharmakis Nong. I think I called you all your names from Charlie to Mao Ma’am. Maybe I am wrong and that isn’t quite right. I’m getting repetitive. </p> <p> I have no sense of clear structure in writing like you do so this is really like a finger paint done by a 5 year old compared to the classical sculptures that are your writings. I’m sorry that this is really underwhelming. But I wanted to let you know about all of this. </p> <p> All of my heart that I feel for you. I just really want to hug you. And never let go. Because if I let go, you may go. And go away. And that’s scary but that only gives the rest of our time so much luster and shimmer and light. Like you said, people who know when they’ll die are already dead. So I won’t fear our end. I hope I can cherish ever second of love and care and warmth I can share you with you. I’m crying a lot now. And snotting too. And wiping it on my clothes. Goodmorning, goodnight, good…. Noon. At any time you’re in, and at any place you’ll be. I love you. :3 <p>- Juice Kid Kim</p>"
                            + "<img src='Images/anniversary/anniversaryphoto.jpeg' width='40%'>";
                        
                        }    
            else{
                
        //        for (let j = 0; j <= keyWords.length; j++){
        //Resume tomorrow, today is 29th of July.
            for (let y = 0; y <= 9; y++){
                
                if (imgSet == y) {
                    html = ""; // Start with empty string
                    let count = imageCounts[y]
                    for (let x = 1; x <= count; x++) {
                        if (y == 0){
                            html += "<img src='Images/thegayandthefurry0/gayandfurry" + x + ".jpeg' width='40%'>";
                        }
                        if (y == 1){
                            html += "<img src='Images/the spelling bee1/the spelling bee" + x + ".jpeg' width='40%'>";
                        }
                        if (y == 2){
                            html += "<img src='Images/kisses2/kisses" + x + ".jpeg' width='40%'>";
                        }
                        if (y == 3){
                            html += "<img src='Images/calls3/calls" + x + ".PNG' width='40%'>";
                        }
                        if (y == 4){
                            html += "<img src='Images/hangouts4/hangout" + x + ".jpeg' width='40%'>";
                        }
                        if (y == 5){
                            html += "<img src='Images/school5/school" + x + ".jpeg' width='40%'>";
                        }
                        if (y == 6){
                            html += "<img src='Images/importanttoyou6/love.jpeg' width='40%'>";
                        }//
                        if (y == 7){
                            html += "<img src='Images/mirrors7/mirror" + x + ".jpeg' width='40%'>";
                        }
                        if (y == 8){
                            html += "<img src='Images/tet8/tet" + x + ".jpeg' width='40%'>";
                            testTxt.innerHTML = html; // Assign the built HTML
                        }
                        if (y == 9){
                            console.log("it is "+y)
                            html += "<p>Hello love, from in front of the field bleachers to the spelling bee to today, I have only been happy to know you. You have been the light of my life officially since 151 nights ago. But you have been for longer. After I met you on the field bleachers, you would wave to me when I waved to you and I felt like a cool kid. Besides the fact that you had claimed your name as Charlie and I was juice kid, I was very happy to know someone so cool who knows me too. And in the Bee you were like my best friend. You would talk to me and I would talk to you and get more and more comfortable with you which made me really happy again. To have a friend like that. And developing feelings for you, I was conflicted that I may lose you as a friend if I did confess. Thanks to the rollerblade coaches seeing a GLIMMER of hope, I confessed. Shaking and really really nervously. And I remember you told me you won’t reject me when I got extremely happy. And hugged you until Sofia and Eleanor walked in on us. Anyways then I felt more and more happy. Of course it was with ups and downs telling me I need to be a better boyfriend of which I’m striving to do. Amy, because you are here, my life feels 100% brighter and happier everyday. You’re someone I can cling to care for, someone who cares for me as much as I do for you. With you I always feel loved, happy, and secure. And I hope I can be that for you. I have my problems and I will always work to better myself because I don’t deserve you. You are this star and this amazing, smart, caring, considerate, beautiful, cute, and AMAZING person. You are talented at all things I see you enjoy. Which is why I know that I should work harder to be the very best boyfriend I can be for you. I love you. Very very much. Happy girlfriends day!!!!</p>"
                            + "<img src='Images/importanttoyou6/love.jpeg' width='40%'>";
                            console.log(html)
            
                        }
                        
                        testTxt.innerHTML = html; // Assign the built HTML
                        
                    }
                       // 
                        
                    }

                
                }
            }
            testTxt.innerHTML = html; // Assign the built HTML
        }
        else {
            console.log(
                searchInput + " not the same as " + keyWords[i]
            ) //placeholders
        }
    }
}


