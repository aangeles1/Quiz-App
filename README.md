# Quiz-App
The Quiz App is a fun quiz that I created with the intention of breaking the ice in this digital world. It is a fun app that you can pull up while on zoom for meetings or even jobs interviews to bring more personability to yourself or send the link to colleagues so everyone can play along. I will also show you some of the code so that you can write new questions and answers that may be more to your liking. 

## Project Description 
The Quiz App is meant to be fun and break the ice with new friends or colleagues.
- start button at the beginning of the quiz
- next button that appears after answer is chosen 
- reset button at the end of the quiz to reset for another round
- several multiple choice questions
- background color changes to red or green based on wether or not the chosen answer was correct. 

## How to Use!
When the app is first opened you'll be greeted by a very simple screen with a start button. Admittedly yes, I could work a little more on that start screen... Seems like one of those many things that "I'll get back to"

![image](https://user-images.githubusercontent.com/91619429/206557415-e288efcb-bc05-40db-884c-be38be5e8fbf.png)

Simply press the start button and get started! There are a few questions and they are mixed up so everytime you do this quiz the questions will be in a different order. When prompted with questions there will be 4 answer choices. And if you choose the correct answer it will be highlighted in green as well as the background and the other answers will show in red. 

![image](https://user-images.githubusercontent.com/91619429/206557809-c241d5a3-b381-4ce9-b916-fc7bf62ffd30.png)

If you choose the wrong answer the background will change to red will the wrongs answers showing in red and the correct answer in green

![image](https://user-images.githubusercontent.com/91619429/206558305-97c7c7d6-a30e-4c92-a12a-d6a0806a60a1.png)

After each quesitons is answered a "next" button with appear in the answer box under the answers. Press this button the advance to the next question.

<img width="887" alt="Screenshot 2022-12-08 at 3 21 37 PM" src="https://user-images.githubusercontent.com/91619429/206560011-9b2b1dda-a7ac-4ea4-a261-ec8977d099eb.png">

After the last question of the quiz you'll be presented with a "reset" button rather than a "next" button. Pressing this will reset the quiz to a new question and cycle through them. It will NOT take you to a new screen with a start button.

<img width="867" alt="Screenshot 2022-12-08 at 3 19 20 PM" src="https://user-images.githubusercontent.com/91619429/206560108-ec59782a-581e-4aed-893a-464b80284be6.png">

## How to Change Questions and Answers
1) locate the questions variable in javascript. 

<img width="494" alt="Screenshot 2022-12-08 at 3 28 03 PM" src="https://user-images.githubusercontent.com/91619429/206561057-fdefb4a5-1732-4d1c-84c7-61560f10a3aa.png">

2) Expand the questions variable, from there you will see the list of questions formated as a list. 

<img width="985" alt="Screenshot 2022-12-08 at 3 30 24 PM" src="https://user-images.githubusercontent.com/91619429/206561283-ba2bcaab-b5b5-4725-93ce-5ec7c2d5e0cb.png">

3) Change the question by replacing the code in the qoutations with a new question

<img width="548" alt="Screenshot 2022-12-08 at 3 31 36 PM" src="https://user-images.githubusercontent.com/91619429/206561619-98644e1a-b209-4c16-b019-031ecc909b7d.png">

4) Change the answer choices by changing the text inside the qoutes after the "text:" code. Be sure to keep the qoutations.

<img width="619" alt="Screenshot 2022-12-08 at 3 33 58 PM" src="https://user-images.githubusercontent.com/91619429/206562083-e904ea16-1020-4cef-9e59-edfed02a9b23.png">

5) To ensure the correct answer will turn green when selected you will have be sure to write the correct answer next to the correct spot that has "true" next to it. Some answers will have all of the correct tags filled with "true" because there was no wrong asnswer for those questions. In order to make answers not correct and show up red you will have to change the text to "false".
<img width="547" alt="Screenshot 2022-12-09 at 3 44 49 PM" src="https://user-images.githubusercontent.com/91619429/206793262-647effe5-aae1-44ed-8bc8-d08c59b3af69.png">



## Languages Used
HTML, CSS, Javascript
