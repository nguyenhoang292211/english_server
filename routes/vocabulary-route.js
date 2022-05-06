const express = require("express");
const {
  addVocab,
  addTopic,
  addGrammar,
  addNote,
  addQuestionGrammar,
  getVocabViaTopic,
  addLearning,
} = require("../controllers/controller");

const router = express.Router();

router.post("/newVocab", addVocab);
router.post("/newTopic", addTopic);
router.post("/newNote", addNote);
router.post("/newGrammar", addGrammar);
router.post("/newQuestionGrammar", addQuestionGrammar);
router.get("/vocabulary/:topicId", getVocabViaTopic);
router.post("/learning", addLearning);

// router.get("/student/:id", getStudent);
// router.put("/student/:id", updateStudent);
// router.delete("/student/:id", deleteStudent);

module.exports = {
  routes: router,
};
