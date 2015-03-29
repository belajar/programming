var QuizQuestions = [
    {
        question: "Siapa Perdana Menteri Pertama Malaysia ?",
        choices: [
            'Tun Abdul Razak',
            'Tun Mahathir',
            'Tunku Abdul Rahman',
            'Tengku Razaleigh'
        ],
        answer: 2
    },
    {
        question: "Apakah Gelaran yang diberikan kepada Tun Dr. Mahathir Mohamad ?",
        choices: [
            'Bapa Kemerdekaan',
            'Bapa Pemodenan',
            'Bapa Pembangunan',
            'Bapa Perpaduan'
        ],
        answer: 1
    },
    {
        question: "Pada tahun berapakah Persekutuan Malaysia dibentuk ?",
        choices: [
            '1963',
            '1957',
            '1980',
            '1981'
        ],
        answer: 0
    }
];

+function() {
    var contentArea, currentQuestion = 0, question;

    contentArea = document.getElementById('viewport-home');
    question = QuizQuestions[currentQuestion];
    //contentArea.appendChild(docu
}();
