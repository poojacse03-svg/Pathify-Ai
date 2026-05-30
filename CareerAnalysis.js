{
  "name": "CareerAnalysis",
  "type": "object",
  "properties": {
    "career_goal": {
      "type": "string",
      "description": "The career the user wants to pursue"
    },
    "match_score": {
      "type": "number",
      "description": "Career match percentage"
    },
    "skills": {
      "type": "array",
      "description": "Required skills",
      "items": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string"
          },
          "level": {
            "type": "string"
          }
        }
      }
    },
    "roadmap": {
      "type": "array",
      "description": "Learning roadmap steps",
      "items": {
        "type": "object",
        "properties": {
          "week": {
            "type": "number"
          },
          "title": {
            "type": "string"
          },
          "tasks": {
            "type": "array",
            "items": {
              "type": "string"
            }
          }
        }
      }
    },
    "motivation": {
      "type": "string",
      "description": "Motivational message"
    },
    "strengths": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "weaknesses": {
      "type": "array",
      "items": {
        "type": "string"
      }
    }
  },
  "required": [
    "career_goal"
  ]
}