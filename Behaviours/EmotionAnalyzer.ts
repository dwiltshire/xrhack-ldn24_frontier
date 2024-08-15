import { Component, Behavior, BehaviorConstructorProps, ContextManager, registerBehaviorRunAtDesignTime } from "@zcomponent/core";
import { Group as Group } from "@zcomponent/three/lib/components/Group";
import { default as SceneVis} from "../SceneVis.zcomp";
import { EmotionMeshComponent } from '../Components/Visualization/EmotionMeshComponent';


// Define the emotion groups
const EMOTION_GROUPS = {
    Joy: ["Joy", "Satisfaction", "Contentment", "Calmness", "Ecstasy", "Relief"],
    Love: ["Love", "Adoration", "Admiration", "Romance", "Desire", "Sympathy"],
    Interest: ["Interest", "Excitement", "Concentration", "Determination", "Triumph", "Pride"],
    Surprise: ["Surprise (positive)", "Surprise (negative)", "Awe", "Realization", "Confusion", "Awkwardness"],
    Sadness: ["Sadness", "Disappointment", "Nostalgia", "Contemplation", "Empathic Pain", "Pain"],
    Fear: ['Fear', 'Anxiety', 'Horror', 'Distress', 'Doubt', 'Guilt'],
    Anger: ['Anger', 'Contempt', 'Disgust', 'Embarrassment', 'Shame'],
    Amusement: ['Amusement', 'Aesthetic Appreciation', 'Craving', 'Boredom', 'Tiredness', 'Entrancement']
};

// Initialize cumulative sums for each group
const cumulativeSums = {
    Joy: 0,
    Love: 0,
    Interest: 0,
    Surprise: 0,
    Sadness: 0,
    Fear: 0,
    Anger: 0,
    Amusement: 0
};

// Generate mock data
const generateMock = () => ({
    type: "user_message",
    message: {
        role: "user",
        content: "Hello. I am feeling excited.",
    },
    models: {
        prosody: {
            scores: Object.keys(EMOTION_GROUPS).reduce((acc, group) => {
                EMOTION_GROUPS[group].forEach(emotion => {
                    acc[emotion] = Math.random();
                });
                return acc;
            }, {} as Record<string, number>),
        },
    },
    time: {
        begin: 3630,
        end: 5730,
    },
    from_text: false,
});

interface ConstructionProps {
	// Add any constructor props you'd like for your behavior here
}


/**
 * @zbehavior 
 * @zparents three/Object3D/Group/Group
 **/
export class EmotionAnalyzer extends Behavior<Group> {

	protected zcomponent = this.getZComponentInstance(SceneVis);
	private intervalId: number | null = null;

	constructor(contextManager: ContextManager, instance: Group, protected constructorProps: ConstructionProps) {
		super(contextManager, instance);

        console.log("MY BEHAVIOUR");

        if (this.intervalId === null) {
            this.intervalId = window.setInterval(() => {

                console.log("TIMER");

                this.updateEmotionScoresAndBoxHeights();
                this.updateRandomWord();  // Fetch and update the random word every 5 seconds
            }, 1000); // 1 second interval
        }
	}

	updateEmotionScoresAndBoxHeights() {
        // Generate mock data and update the emotion scores
        const mockData = generateMock();
        const emotionScores = mockData.models.prosody.scores;

        // Calculate the sum of emotion scores for each group and add to cumulative sums
        for (const group in EMOTION_GROUPS) {
            if (EMOTION_GROUPS.hasOwnProperty(group)) {
                let roundSum = 0;
                EMOTION_GROUPS[group].forEach(emotion => {
                    roundSum += emotionScores[emotion] || 0;
                });
                cumulativeSums[group] += roundSum;  // Add the current round sum to the cumulative sum

                // scoresText += `<strong>${group}:</strong><br>`;
                // EMOTION_GROUPS[group].forEach(emotion => {
                //     const score = emotionScores[emotion] !== undefined ? emotionScores[emotion].toFixed(6) : "N/A";
                // });
            }
        }

        console.log('CHIILLLLDDREEN', this.zcomponent.nodes.Content_Group.children.length);

        // var nodes = this.zcomponent.nodes.Content_Group.children;

        const EmotionToComponentMap = {
            Anger: this.zcomponent.nodes.EmotionAnger,
            Fear: this.zcomponent.nodes.EmotionFear,
            Amusement: this.zcomponent.nodes.EmotionAmusement,
            Love: this.zcomponent.nodes.EmotionLove,
            Surprise: this.zcomponent.nodes.EmotionSurprise,
            Sadness: this.zcomponent.nodes.EmotionSadness,
            Interest: this.zcomponent.nodes.EmotionInterest,
            Joy: this.zcomponent.nodes.EmotionJoy
        }

        for (const group in EMOTION_GROUPS) {
            let component = EmotionToComponentMap[group] as EmotionMeshComponent;  

            const opacity = cumulativeSums[group] / (100.0 * 4);

            component.opacity += opacity;
            // console.log(component.opacity);
        }

       

        // Update the heights of the boxes based on the cumulative sums, divided by 100
        /*const boxOne = this.zcomponent.nodes.BoxOne.element;
        const boxTwo = this.zcomponent.nodes.BoxTwo.element;
        const boxThree = this.zcomponent.nodes.BoxThree.element;
        const boxFour = this.zcomponent.nodes.BoxFour.element;
        const boxFive = this.zcomponent.nodes.BoxFive.element;

        boxOne.scale.setY(cumulativeSums["Joy"] / 100);
        boxTwo.scale.setY(cumulativeSums["Love"] / 100);
        boxThree.scale.setY(cumulativeSums["Interest"] / 100);
        boxFour.scale.setY(cumulativeSums["Surprise"] / 100);
        boxFive.scale.setY(cumulativeSums["Sadness"] / 100);

        const emotionScoresElement = document.getElementById('emotionScores');
        if (emotionScoresElement) {
            emotionScoresElement.innerHTML = scoresText;
        } else {
            console.error("Element with id 'emotionScores' not found.");
        }*/
    }

    private async updateRandomWord() {
        try {
            const response = await fetch('https://random-word-api.herokuapp.com/word');
            const wordArray = await response.json();
            const randomWord = wordArray[0]; // The API returns an array of words

            // console.log(`Fetched word: ${randomWord}`);

            // Update the text inside the element with id 'RandomWord'
            const randomWordElement = document.getElementById('RandomWord');
            if (randomWordElement) {
                randomWordElement.innerText = randomWord;  // Update the Inner Text of the RandomWord element
            } else {
                console.error('Element with id RandomWord not found.');
            }
        } catch (error) {
            console.error('Error fetching random word:', error);
        }
    }

    dispose() {
        // Clear the interval when disposing
        if (this.intervalId !== null) {
            clearInterval(this.intervalId);
        }
        return super.dispose();
    }
}

// Run at design time
registerBehaviorRunAtDesignTime(EmotionAnalyzer);
