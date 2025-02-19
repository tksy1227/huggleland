const quizData = {
    welcome: {
        title: "Welcome to Huggleland",
        subtitle: "where every day is filled with wonder and excitement!",
        description: "Today, you're about to embark on an adventure beyond the stars. But first, we need to discover who you truly are. Are you ready to begin your journey?"
    },
    scenes: [
        {
            id: 1,
            title: "First Scenario - Problem-Solving",
            background: "The animal friends have gathered near their spaceship, ready to leave, but the ship needs repairs.",
            question: "Oh no! The spaceship needs some last-minute repairs before it can take off. How do you help?",
            options: [
                { text: "I grab the tools and start working on the ship!", type: "Mouse" },
                { text: "I gather everyone and come up with a detailed plan.", type: "Owl" },
                { text: "I scout the area for any useful resources we could use.", type: "Fox" },
                { text: "I encourage my friends and give them a pep talk!", type: "Bear" },
                { text: "I jump in to help however I can—there's no time to waste!", type: "Rabbit" }
            ]
        },
        {
            id: 2,
            title: "Second Scenario - Navigating a Challenge",
            background: "The crew arrives on a mysterious planet with thick forests and glowing mist, unsure of how to reach their destination.",
            question: "The path ahead is difficult, and you need to make your way through a strange and unfamiliar landscape. How do you proceed?",
            options: [
                { text: "I use my tools to clear a safe path forward.", type: "Mouse" },
                { text: "I climb up high to get a better view and plan our route.", type: "Fox" },
                { text: "I pull out the map and carefully calculate the best way forward.", type: "Owl" },
                { text: "I lead the charge, trusting my instincts!", type: "Rabbit" },
                { text: "I offer to carry supplies and help anyone who gets tired.", type: "Bear" }
            ]
        },
        {
            id: 3,
            title: "Third Scenario - Helping a Friend",
            background: "A local creature approaches the crew, asking for help fixing their broken rover.",
            question: "A creature on this planet is in trouble and needs help with their broken-down rover. What do you do?",
            options: [
                { text: "I use my tools and start fixing it right away.", type: "Mouse" },
                { text: "I offer them some spare parts from our ship.", type: "Owl" },
                { text: "I suggest a clever solution to make the rover work temporarily.", type: "Fox" },
                { text: "I ask my friends for help and encourage teamwork.", type: "Rabbit" },
                { text: "I lend my strength to help push the rover back to their base.", type: "Bear" }
            ]
        },
        {
            id: 4,
            title: "Fourth Scenario - Celebration Time",
            background: "The crew returns to Huggleland after their grand space adventure, preparing for a celebration.",
            question: "After a successful journey, it's time to celebrate! How do you contribute to the party?",
            options: [
                { text: "I help set up the decorations and fix anything that needs adjusting.", type: "Mouse" },
                { text: "I plan the event and make sure everything runs smoothly.", type: "Owl" },
                { text: "I organize games and puzzles for everyone to enjoy.", type: "Fox" },
                { text: "I share exciting stories about our adventure!", type: "Rabbit" },
                { text: "I cook up a big feast for everyone to enjoy.", type: "Bear" }
            ]
        }
    ],
    results: {
        Mouse: {
            title: "the resourceful Mouse",
            description: "Quick-thinking and handy, you always know how to fix things when they break. No problem is too big or too small when you have the right tools in your paws!",
            closing: "Now that you know which animal spirit guides you, your journey through the stars is ready to begin! Adventure and discovery await—are you ready to explore the universe?"
        },
        Owl: {
            title: "the wise Owl",
            description: "With your knowledge and careful planning, you guide your friends through even the toughest challenges. You're always thinking ahead and love solving puzzles.",
            closing: "Now that you know which animal spirit guides you, your journey through the stars is ready to begin! Adventure and discovery await—are you ready to explore the universe?"
        },
        Fox: {
            title: "the clever Fox",
            description: "Always on the lookout for solutions, you know how to navigate tricky situations. Your sharp mind helps your friends find the best path forward.",
            closing: "Now that you know which animal spirit guides you, your journey through the stars is ready to begin! Adventure and discovery await—are you ready to explore the universe?"
        },
        Rabbit: {
            title: "the adventurous Rabbit",
            description: "Bold and full of energy, you're always leading the way with excitement. You inspire your friends with your courage and determination!",
            closing: "Now that you know which animal spirit guides you, your journey through the stars is ready to begin! Adventure and discovery await—are you ready to explore the universe?"
        },
        Bear: {
            title: "the strong Bear",
            description: "Gentle but powerful, you're always there to support your friends and lend a helping paw. Your kindness and strength make you the heart of the team.",
            closing: "Now that you know which animal spirit guides you, your journey through the stars is ready to begin! Adventure and discovery await—are you ready to explore the universe?"
        }
    }
};