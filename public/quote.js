var quotes = ["But man is not made for defeat. A man can be destroyed but not defeated.-Ernest Hemingway",
    "When you reach the end of your rope, tie a knot in it and hang on.-Franklin D. Roosevelt",
    "There is nothing permanent except change.-Heraclitus",
    " You miss 100 percent of the shots you never take.—Wayne Gretzky",
    " Courage is not the absence of fear, but rather the judgement that something else is more important than fear.—Ambrose Redmoon",
    "You must be the change you wish to see in the world.—Gandhi",
    " When hungry, eat your rice; when tired, close your eyes. Fools may laugh at me, but wise men will know what I mean.—Lin-Chi",
    " The third-rate mind is only happy when it is thinking with the majority. The second-rate mind is only happy when it is thinking with the minority. The first-rate mind is only happy when it is thinking.—A. A. Milne",
    " To the man who only has a hammer, everything he encounters begins to look like a nail.—Abraham Maslow",
    "You cannot shake hands with a clenched fist.-Indira Gandhi",
    " We are what we repeatedly do; excellence, then, is not an act but a habit.—Aristotle",
    "Let us sacrifice our today so that our children can have a better tomorrow.-A. P. J. Abdul Kalam",
    " Do not seek to follow in the footsteps of the men of old; seek what they sought.—Basho",
    " Watch your thoughts; they become words.Watch your words; they become actions.Watch your actions; they become habits.Watch your habits; they become character.Watch your character; it becomes your destiny.—Lao-Tze",
    " Everyone is a genius at least once a year. The real geniuses simply have their bright ideas closer together.—Georg Christoph Lichtenberg",
    " What we think, or what we know, or what we believe is, in the end, of little consequence. The only consequence is what we do.—John Ruskin",
    "When you reach the end of your rope, tie a knot in it and hang on.-Franklin D. Roosevelt"
]

function generateQuote() {
    var random = Math.floor(Math.random() * 20);
    document.getElementById('quote').innerHTML = quotes[random];
}
