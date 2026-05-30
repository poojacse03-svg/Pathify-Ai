{
  "name": "QuizResult",
  "type": "object",
  "properties": {
    "category": {
      "type": "string",
      "enum": [
        "aptitude",
        "coding",
        "general_knowledge"
      ],
      "description": "Quiz category"
    },
    "score": {
      "type": "number",
      "description": "Score achieved"
    },
    "total_questions": {
      "type": "number",
      "description": "Total questions in quiz"
    },
    "xp_earned": {
      "type": "number",
      "description": "XP points earned"
    },
    "answers": {
      "type": "array",
      "description": "Array of answer objects",
      "items": {
        "type": "object",
        "properties": {
          "question": {
            "type": "string"
          },
          "selected": {
            "type": "string"
          },
          "correct": {
            "type": "string"
          },
          "is_correct": {
            "type": "boolean"
          }
        }
      }
    }
  },
  "required": [
    "category",
    "score",
    "total_questions"
  ]
}