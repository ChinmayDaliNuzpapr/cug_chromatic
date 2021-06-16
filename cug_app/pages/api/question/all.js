import questionModel from "../../../models/question";
import categoryModel from "../../../models/category";
import groupModel from "../../../models/group";
import DBConnect from "../../middleware/DBConnect";
import isUserLoggedIn from "../../middleware/isUserLoggedIn";

const getCategoryAndQuestions = async (req, res) => {
  try {
    req = await isUserLoggedIn(req, res);
    console.log("REQ", req.user);
    const currentGroup = await groupModel.findOne({
      Group_name: req.user.Group_name,
    });

    const defaultCategory = "60c1d3759e4b0d08706a9a3d"; //ID of default category "category 1"

    const categories = await categoryModel.find({});

    const questions = await questionModel.find({
      $and: [{ category: defaultCategory }, { group: currentGroup._id }],
    });

    res.status(200).send({ categories, questions, currentGroup });
  } catch (err) {
    console.log("THE ERROR", err);
    res.status(500).send({ error: err });
  }
};

export default DBConnect(getCategoryAndQuestions);
