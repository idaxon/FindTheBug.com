// Handle landing page button click
document.getElementById("startPlayingBtn").addEventListener("click", () => {
    // Hide landing page and show game section
    document.getElementById("landingPage").style.display = "none";
    document.getElementById("playSection").classList.add("active");
    loadChallenge();
});

// Sample leaderboard data with high scores and time spent
let leaderboardData = [
    { username: 'Amit Sharma', bugsSolved: 25, points: 1200, timeSpent: 250 },
    { username: 'Priya Gupta', bugsSolved: 22, points: 1100, timeSpent: 270 },
    { username: 'Ravi Patel', bugsSolved: 20, points: 1000, timeSpent: 300 },
    { username: 'Neha Verma', bugsSolved: 18, points: 900, timeSpent: 330 },
    { username: 'Vishal Singh', bugsSolved: 15, points: 750, timeSpent: 350 },
    { username: 'Sanya Joshi', bugsSolved: 12, points: 600, timeSpent: 380 },
    { username: 'Arjun Reddy', bugsSolved: 10, points: 500, timeSpent: 420 },
    { username: 'Isha Mehta', bugsSolved: 8, points: 400, timeSpent: 450 },
    { username: 'Karan Khurana', bugsSolved: 6, points: 300, timeSpent: 480 },
    { username: 'Simran Yadav', bugsSolved: 4, points: 200, timeSpent: 510 }
];


// Display leaderboard in table
function updateLeaderboard() {
    const leaderboardTable = document.getElementById("leaderboardTable");
    leaderboardTable.innerHTML = `
        <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Bugs Solved</th>
            <th>Points</th>
            <th>Time Spent</th>
        </tr>
    `;
    leaderboardData.sort((a, b) => {
        if (b.points === a.points) {
            return a.timeSpent - b.timeSpent; // Sort by time spent if points are equal
        }
        return b.points - a.points; // Sort by points descending
    });

    leaderboardData.forEach((player, index) => {
        let row = leaderboardTable.insertRow();
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${player.username}</td>
            <td>${player.bugsSolved}</td>
            <td>${player.points}</td>
            <td>${player.timeSpent}s</td>
        `;
    });
}

// Load a new challenge
function loadChallenge() {
    const challengeArea = document.getElementById("challengeArea");
    const question = `function add(a, b) { return a - b; }`;  // Bug in code
    challengeArea.innerHTML = `<pre>${question}</pre>`;
}

// Handle solution submission
document.getElementById("submitSolutionBtn").addEventListener("click", () => {
    const solution = document.getElementById("solutionInput").value;
    const correctSolution = `function add(a, b) { return a + b; }`;  // Correct solution

    // Simulate a point system (easy difficulty)
    if (solution === correctSolution) {
        let pointsEarned = 50; // Points for easy question
        leaderboardData[0].points += pointsEarned; // Simulate player points
        updateLeaderboard();
        alert(`Correct! You earned ${pointsEarned} points.`);
    } else {
        alert("Incorrect solution. Try again.");
    }
});

// Quit game and return to landing page
document.getElementById("quitGameBtn").addEventListener("click", () => {
    document.getElementById("playSection").classList.remove("active");
    document.getElementById("landingPage").style.display = "flex";
});

// Call updateLeaderboard to populate leaderboard on page load
updateLeaderboard();
