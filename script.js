let btn = document.getElementById("searchBtn");
let txtbox = document.getElementById("searchBox");
let testTxt = document.getElementById("testText");
let keyWords = [
    "the gay and the furry", //
    "the spelling bee", //
    "kisses", //
    "calls", //
    "hangouts", //
    "school", //
    "important to you",  
    "mirrors", //
    "tet", //
    "letter"//
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

    for (let i = 0; i < keyWords.length; i++){
        if (searchInput == keyWords[i]){
            let correct = true
            console.log(keyWords[i])
            console.log(correct)
            let imgSet = i // define imgSet as a number for use of the images.
            console.log(imgSet)

        //        for (let j = 0; j <= keyWords.length; j++){
        //Resume tomorrow, today is 29th of July.
            for (let y = 0; y <= 9; y++){
                
                if (imgSet == y) {
                    let html = ""; // Start with empty string
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
                        }
                        if (y == 7){
                            html += "<img src='Images/mirrors7/mirror" + x + ".jpeg' width='40%'>";
                        }
                        if (y == 8){
                            html += "<img src='Images/tet8/tet" + x + ".jpeg' width='40%'>";
                        }
                        if (y == 9){
                            console.log("it is "+y)
                            html += "<p>Hello love, from in front of the field bleachers to the spelling bee to today, I have only been happy to know you. You have been the light of my life officially since 151 nights ago. But you have been for longer. After I met you on the field bleachers, you would wave to me when I waved to you and I felt like a cool kid. Besides the fact that you had claimed your name as Charlie and I was juice kid, I was very happy to know someone so cool who knows me too. And in the Bee you were like my best friend. You would talk to me and I would talk to you and get more and more comfortable with you which made me really happy again. To have a friend like that. And developing feelings for you, I was conflicted that I may lose you as a friend if I did confess. Thanks to the rollerblade coaches seeing a GLIMMER of hope, I confessed. Shaking and really really nervously. And I remember you told me you won’t reject me when I got extremely happy. And hugged you until Sofia and Eleanor walked in on us. Anyways then I felt more and more happy. Of course it was with ups and downs telling me I need to be a better boyfriend of which I’m striving to do. Amy, because you are here, my life feels 100% brighter and happier everyday. You’re someone I can cling to care for, someone who cares for me as much as I do for you. With you I always feel loved, happy, and secure. And I hope I can be that for you. I have my problems and I will always work to better myself because I don’t deserve you. You are this star and this amazing, smart, caring, considerate, beautiful, cute, and AMAZING person. You are talented at all things I see you enjoy. Which is why I know that I should work harder to be the very best boyfriend I can be for you. I love you. Very very much. Happy girlfriends day!!!!</p>"
                            + "<img src='Images/importanttoyou6/love.jpeg' width='40%'>";
                        }

                        
                        
                    }

                testTxt.innerHTML = html; // Assign the built HTML
                }
            }

        }
        else {
            console.log(
                searchInput + " not the same as " + keyWords[i]
            ) //placeholders
        }
    }
}


