const router = require("express").Router();
let Item = require("../models/item");

router.route("/").get((req, res) => {
  Item.find()
    .then((items) => res.json(items))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const data = req.body.data;
  console.log(req.body);

  const newItem = new Item({
    data,
  });
  newItem
    .save()
    .then(() => res.json(newItem._id))
    .catch((err) => res.status(400).json("Error: " + err)); /**/
});

router.route("/:id").delete((req, res) => {
  Item.findByIdAndDelete(req.params.id)
    .then(() => res.json("Exercise deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  /* Exercise.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json('Error: ' + err)); */
});

router.route("/update/:id").post((req, res) => {
  /*  Exercise.findById(req.params.id)
     .then(exercise => {
       exercise.username = req.body.username;
       exercise.description = req.body.description;
       exercise.duration = Number(req.body.duration);
       exercise.date = Date.parse(req.body.date);

       exercise.save()
         .then(() => res.json('Exercise updated!'))
         .catch(err => res.status(400).json('Error: ' + err));
     })
     .catch(err => res.status(400).json('Error: ' + err)); */
});

module.exports = router;
