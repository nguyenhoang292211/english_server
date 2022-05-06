"use strict";
const { db } = require("../db");
const firestore = require("firebase-admin/firestore");
const addVocab = async (req, res, next) => {
  try {
    let data = req.body;
    data = {
      ...data,
      createdAt: firestore.Timestamp.fromDate(new Date()),
      updatedAt: firestore.Timestamp.fromDate(new Date()),
    };
    const response = await db.collection("vocabulary").doc().set(data);
    res.send({ message: "Record saved successfuly", data: response });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const addTopic = async (req, res, next) => {
  try {
    let data = req.body;
    data = {
      ...data,
      createdAt: firestore.Timestamp.fromDate(new Date()),
      updatedAt: firestore.Timestamp.fromDate(new Date()),
    };

    const response = await db.collection("topic").doc().set(data);
    res.send({ message: "Record saved successfuly", data: response });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const addGrammar = async (req, res, next) => {
  try {
    let data = req.body;
    data = {
      ...data,
      createdAt: new Date().getTime(),
      updatedAt: new Date().getTime(),
    };

    const response = await db.collection("grammar").doc().set(data);
    res.send({ message: "Record saved successfuly", data: response });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const addQuestionGrammar = async (req, res, next) => {
  try {
    const data = req.body;
    const response = await db.collection("QuestionGrammar").doc().set(data);
    res.send({ message: "Record saved successfuly", data: response });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const addNote = async (req, res, next) => {
  try {
    let data = req.body;
    data = {
      ...data,
      createdAt: new Date().getTime(),
      updatedAt: new Date().getTime(),
    };

    const response = await db.collection("note").doc().set(data);
    res.send({ message: "Record saved successfuly", data: response });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const addLearning = async (req, res, next) => {
  try {
    let data = req.body;
    data = {
      ...data,
      createdAt: new Date().getTime(),
      updatedAt: new Date().getTime(),
    };

    const response = await db.collection("learning").doc().set(data);
    res.send({ message: "Record saved successfuly", data: response });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// GET DATA
const getVocabViaTopic = (topicId) => async (req, res, next) => {
  try {
    // const topicId = req.params.id;
    console.log(topicId);
    const Vocabularies = await db
      .collection("vocabulary")
      .where("topic", "==", topicId ?? "hhZqdS6b6zsHdPjC7ZQD");
    //   .orderBy("word", "asc");
    const data = await Vocabularies.get();
    if (!data.exists) {
      res.status(404).send("Vocabularies not found");
    } else {
      res.send(data.data());
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  addVocab,
  addTopic,
  addGrammar,
  addQuestionGrammar,
  addNote,
  getVocabViaTopic,
  addLearning,
};
