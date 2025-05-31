// NBA Playoff Prediction Dashboard JavaScript

// Application data
const appData = {
    "model_performance": [
        {"Model": "Logistic Regression", "Accuracy": 0.63}, 
        {"Model": "Random Forest", "Accuracy": 0.595}, 
        {"Model": "Gradient Boosting", "Accuracy": 0.63}
    ], 
    "feature_importance": [
        {"Feature": "assists_per_game", "Random_Forest_Importance": 0.108329, "Gradient_Boosting_Importance": 0.135716}, 
        {"Feature": "defensive_rating", "Random_Forest_Importance": 0.099442, "Gradient_Boosting_Importance": 0.102264}, 
        {"Feature": "rebounds_per_game", "Random_Forest_Importance": 0.098365, "Gradient_Boosting_Importance": 0.109229}, 
        {"Feature": "team_ppg", "Random_Forest_Importance": 0.097641, "Gradient_Boosting_Importance": 0.100943}, 
        {"Feature": "fg_percentage", "Random_Forest_Importance": 0.095437, "Gradient_Boosting_Importance": 0.089232}, 
        {"Feature": "turnovers_per_game", "Random_Forest_Importance": 0.094449, "Gradient_Boosting_Importance": 0.124653}, 
        {"Feature": "three_point_pct", "Random_Forest_Importance": 0.092289, "Gradient_Boosting_Importance": 0.100946}, 
        {"Feature": "offensive_rating", "Random_Forest_Importance": 0.092214, "Gradient_Boosting_Importance": 0.076003}
    ], 
    "injury_impact": [
        {"injury_count": 0, "mean": 0.631, "count": 244}, 
        {"injury_count": 1, "mean": 0.568, "count": 338}, 
        {"injury_count": 2, "mean": 0.589, "count": 246}, 
        {"injury_count": 3, "mean": 0.64, "count": 100}, 
        {"injury_count": 4, "mean": 0.608, "count": 51}
    ], 
    "prediction_examples": [
        {"Team": "Lakers", "PPG": 115.2, "FG_Pct": 0.478, "Def_Rating": 112.5, "Injuries": 2, "Home": 1, "Predicted_Win_Prob": 0.72}, 
        {"Team": "Celtics", "PPG": 117.8, "FG_Pct": 0.462, "Def_Rating": 105.2, "Injuries": 1, "Home": 1, "Predicted_Win_Prob": 0.78}, 
        {"Team": "Warriors", "PPG": 112.5, "FG_Pct": 0.45, "Def_Rating": 108.7, "Injuries": 3, "Home": 0, "Predicted_Win_Prob": 0.58}, 
        {"Team": "Heat", "PPG": 110.0, "FG_Pct": 0.468, "Def_Rating": 109.3, "Injuries": 1, "Home": 0, "Predicted_Win_Prob": 0.62}, 
        {"Team": "Nuggets", "PPG": 118.8, "FG_Pct": 0.506, "Def_Rating": 107.0, "Injuries": 0, "Home": 1, "Predicted_Win_Prob": 0.85}
    ]
};

// Feature name translations
const featureTranslations = {
    'assists_per_game': '場均助攻',
    'defensive_rating': '防守效率',
    'rebounds_per_game': '場均籃板',
    'team_ppg': '球隊場均得分',
    'fg_percentage': '投籃命中率',
    'turnovers_per_game': '場均失誤',
    'three_point_pct': '三分命中率',
    'offensive_rating': '進攻效率'
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeTabs();
    populateFeatureTable();
    populateInjuryTable();
    populateTeamExamples();
    initializePredictionForm();
});

// Tab Navigation
function initializeTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanels = document.querySelectorAll('.tab-panel');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab');
            
            // Remove active class from all tabs and panels
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanels.forEach(panel => panel.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding panel
            button.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });
}

// Populate Feature Table
function populateFeatureTable() {
    const tableBody = document.getElementById('feature-table-body');
    const features = appData.feature_importance;
    
    tableBody.innerHTML = '';
    
    features.forEach((feature, index) => {
        const row = document.createElement('tr');
        const featureName = featureTranslations[feature.Feature] || feature.Feature;
        const rfImportance = (feature.Random_Forest_Importance * 100).toFixed(1);
        const gbImportance = (feature.Gradient_Boosting_Importance * 100).toFixed(1);
        
        row.innerHTML = `
            <td>
                <strong>${featureName}</strong>
                <div style="font-size: 0.8em; color: var(--color-text-secondary); margin-top: 2px;">
                    ${feature.Feature}
                </div>
            </td>
            <td>
                <div class="importance-bar">
                    <div class="importance-fill" style="width: ${feature.Random_Forest_Importance * 100 / 0.15 * 100}%"></div>
                    <div class="importance-value">${rfImportance}%</div>
                </div>
            </td>
            <td>
                <div class="importance-bar">
                    <div class="importance-fill" style="width: ${feature.Gradient_Boosting_Importance * 100 / 0.15 * 100}%"></div>
                    <div class="importance-value">${gbImportance}%</div>
                </div>
            </td>
            <td>
                <div style="text-align: center; font-weight: 500;">
                    排名 #${index + 1}
                </div>
            </td>
        `;
        
        tableBody.appendChild(row);
    });
}

// Populate Injury Table
function populateInjuryTable() {
    const tableBody = document.getElementById('injury-table-body');
    const injuryData = appData.injury_impact;
    
    tableBody.innerHTML = '';
    
    injuryData.forEach(data => {
        const row = document.createElement('tr');
        const winRate = (data.mean * 100).toFixed(1);
        const impactClass = data.mean > 0.6 ? 'impact-positive' : data.mean < 0.58 ? 'impact-negative' : 'impact-neutral';
        const impactText = data.mean > 0.6 ? '正面影響' : data.mean < 0.58 ? '負面影響' : '中性影響';
        
        row.innerHTML = `
            <td style="font-weight: 500;">${data.injury_count} 人</td>
            <td style="font-weight: 600; color: var(--color-primary);">${winRate}%</td>
            <td>${data.count} 場</td>
            <td class="${impactClass}" style="font-weight: 500;">${impactText}</td>
        `;
        
        tableBody.appendChild(row);
    });
}

// Populate Team Examples
function populateTeamExamples() {
    const container = document.getElementById('team-examples-container');
    const examples = appData.prediction_examples;
    
    container.innerHTML = '';
    
    examples.forEach(team => {
        const winProb = (team.Predicted_Win_Prob * 100).toFixed(1);
        const probClass = team.Predicted_Win_Prob > 0.7 ? 'prob-high' : 
                         team.Predicted_Win_Prob > 0.5 ? 'prob-medium' : 'prob-low';
        const homeAway = team.Home === 1 ? '主場' : '客場';
        
        const teamElement = document.createElement('div');
        teamElement.className = 'team-example';
        teamElement.innerHTML = `
            <div class="team-info">
                <h4>🏀 ${team.Team}</h4>
                <div class="team-stats">
                    ${team.PPG} PPG • ${(team.FG_Pct * 100).toFixed(1)}% FG • ${team.Def_Rating} 防守 • ${team.Injuries} 傷病 • ${homeAway}
                </div>
            </div>
            <div class="team-probability">
                <div class="prob-value ${probClass}">${winProb}%</div>
            </div>
        `;
        
        // Add click event to populate form with team data
        teamElement.addEventListener('click', () => {
            populateFormWithTeam(team);
        });
        
        container.appendChild(teamElement);
    });
}

// Populate form with team data
function populateFormWithTeam(team) {
    document.getElementById('team-ppg').value = team.PPG;
    document.getElementById('fg-pct').value = team.FG_Pct;
    document.getElementById('three-pct').value = 0.36; // Default value as not provided
    document.getElementById('rebounds').value = 45; // Default value as not provided
    document.getElementById('assists').value = 25; // Default value as not provided
    document.getElementById('turnovers').value = 14; // Default value as not provided
    document.getElementById('def-rating').value = team.Def_Rating;
    document.getElementById('home-away').value = team.Home;
    document.getElementById('injury-count').value = team.Injuries;
    
    // Calculate and display prediction
    calculatePrediction();
    
    // Switch to prediction tab if not already there
    const predictionTab = document.querySelector('[data-tab="prediction"]');
    predictionTab.click();
}

// Initialize Prediction Form
function initializePredictionForm() {
    const form = document.getElementById('prediction-form');
    const inputs = form.querySelectorAll('input, select');
    
    // Add event listeners for real-time calculation
    inputs.forEach(input => {
        input.addEventListener('input', calculatePrediction);
    });
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        calculatePrediction();
    });
    
    // Initial calculation
    calculatePrediction();
}

// Calculate Prediction (Simplified model for demo)
function calculatePrediction() {
    const ppg = parseFloat(document.getElementById('team-ppg').value) || 110;
    const fgPct = parseFloat(document.getElementById('fg-pct').value) || 0.45;
    const threePct = parseFloat(document.getElementById('three-pct').value) || 0.35;
    const rebounds = parseFloat(document.getElementById('rebounds').value) || 44;
    const assists = parseFloat(document.getElementById('assists').value) || 24;
    const turnovers = parseFloat(document.getElementById('turnovers').value) || 14;
    const defRating = parseFloat(document.getElementById('def-rating').value) || 110;
    const home = parseInt(document.getElementById('home-away').value) || 1;
    const injuries = parseInt(document.getElementById('injury-count').value) || 1;
    
    // Simplified prediction algorithm based on feature importance
    let score = 0;
    
    // Normalize and weight features based on importance
    score += (assists - 20) / 15 * 0.135; // assists_per_game
    score += (115 - defRating) / 15 * 0.102; // defensive_rating (lower is better)
    score += (rebounds - 40) / 15 * 0.109; // rebounds_per_game
    score += (ppg - 105) / 20 * 0.101; // team_ppg
    score += (fgPct - 0.42) / 0.08 * 0.089; // fg_percentage
    score += (16 - turnovers) / 6 * 0.125; // turnovers_per_game (lower is better)
    score += (threePct - 0.32) / 0.08 * 0.101; // three_point_pct
    score += home * 0.05; // home advantage
    score -= injuries * 0.02; // injury penalty
    
    // Convert to probability using sigmoid-like function
    const probability = Math.max(0.1, Math.min(0.95, 0.5 + score));
    
    // Update display
    const probElement = document.getElementById('win-prob');
    const statusElement = document.getElementById('probability-status');
    
    const probPercent = (probability * 100).toFixed(1);
    probElement.textContent = `${probPercent}%`;
    
    // Update status and color
    if (probability > 0.7) {
        statusElement.className = 'status status--success';
        statusElement.textContent = '高勝率 - 強烈看好';
        probElement.style.color = '#27ae60';
    } else if (probability > 0.5) {
        statusElement.className = 'status status--warning';
        statusElement.textContent = '中等勝率 - 勝負難料';
        probElement.style.color = '#f39c12';
    } else {
        statusElement.className = 'status status--error';
        statusElement.textContent = '低勝率 - 面臨挑戰';
        probElement.style.color = '#e74c3c';
    }
}

// Utility function to format numbers
function formatNumber(num, decimals = 1) {
    return num.toFixed(decimals);
}

// Add smooth scrolling for better UX
function smoothScrollTo(element) {
    element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

// Add loading states for better UX
function showLoading(element) {
    element.innerHTML = '<div style="text-align: center; padding: 20px;">載入中...</div>';
}

// Error handling
function handleError(error, context) {
    console.error(`Error in ${context}:`, error);
    // Could add user-friendly error messages here
}

// Export functions for testing (if needed)
window.NBADashboard = {
    calculatePrediction,
    populateFormWithTeam,
    formatNumber
};