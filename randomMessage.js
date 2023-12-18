const phraseParts = {
    noun : {
        person : ["the boy", "my mom", "the girl", "Katherine", "Ant", "Jordan", "Kylie", "Ashton"],
        animal: ["the lion", "the tiger", "the bear", "the cyote", "the fox", "the dragon", "the lizard", "the shark", "the gorilla"],
        place: ["home", "hotel", "hut", "Hawaii", "Vegas", "mountains", "casino", "underground"]
    }, 
    verbs : {
        action_verbs : ["runs", "sleeps", "fly", "jogs", "walks", "laughs", "snores", "sings", "fights", "cooks", "eats"],
        linking_verbs : ["is", "appear to be", "becomes", "feels", "looks", "sounds", "tastes", "stays", "grows", "gets", "keeps"] 
    }, 
    adjective : {
        descriptive_adj : ["tall", "short", "big", "small", "red", "white", "blue", "smooth", "quick", "slow", "calm", "zealous", "wonderful", ""],
        predicate_adj : ["loud", "quiet", "happy", "sad", "angry", "excited", "frustrated", "cheerful"]
    },

    
    pickWord : (array) => {
       const index = Math.floor(Math.random()* (array.length));
        return array[index];
    },

    randomNoun : () => {
        let word;
        const nounObj = phraseParts.noun;
        number = Math.floor(Math.random()* 3);
        switch (number){
            case 0:
                word = phraseParts.pickWord(nounObj.person);
                break;
            case 1:
                word = phraseParts.pickWord(nounObj.animal);
                break;
            case 2:
                word = phraseParts.pickWord(nounObj.place);
                break;
            default:
                return 'No word picked'
        }
        return word
    },
    randomVerb : () => {
        let word;
        const verbObj = phraseParts.verbs;
        number = Math.floor(Math.random()* 2);
        switch (number){
            case 0:
                word = phraseParts.pickWord(verbObj.action_verbs);
                break;
            case 1:
                word = phraseParts.pickWord(verbObj.linking_verbs);
                break;
            default:
                return 'No word picked'
        }
        return word
    },
    randomAdj : () => {
        let word;
        const adjObj = phraseParts.adjective;
        number = Math.floor(Math.random()* 2);
        switch (number){
            case 0:
                word = phraseParts.pickWord(adjObj.descriptive_adj);
                break;
            case 1:
                word = phraseParts.pickWord(adjObj.predicate_adj);
                break;
            default:
                return 'No word picked'
        }
        return word
    },
    generatePhrase : () => {
        let noun = phraseParts.randomNoun();
        let verb = phraseParts.randomVerb();
        let adjective = phraseParts.randomAdj();
        return `${noun} ${verb} ${adjective}.`
    }

}

console.log(phraseParts.generatePhrase());
