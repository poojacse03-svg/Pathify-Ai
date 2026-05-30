{
  "name": "UserProgress",
  "type": "object",
  "properties": {
    "total_xp": {
      "type": "number",
      "default": 0,
      "description": "Total XP earned"
    },
    "streak_days": {
      "type": "number",
      "default": 0,
      "description": "Current learning streak"
    },
    "last_active_date": {
      "type": "string",
      "format": "date",
      "description": "Last active date"
    },
    "quizzes_completed": {
      "type": "number",
      "default": 0
    },
    "badges": {
      "type": "array",
      "description": "Earned badges",
      "items": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string"
          },
          "icon": {
            "type": "string"
          },
          "earned_date": {
            "type": "string"
          }
        }
      }
    },
    "skill_scores": {
      "type": "object",
      "description": "Skill radar scores",
      "properties": {
        "logic": {
          "type": "number"
        },
        "coding": {
          "type": "number"
        },
        "communication": {
 