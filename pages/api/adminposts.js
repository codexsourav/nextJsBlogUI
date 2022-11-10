import Postdata from "../../database/blogposts";
import jwt from "jsonwebtoken";

export default function handler(req, res) {
  if (req.method === "POST") {
    if (req.body.cook.auth) {
      try {
        const decode = jwt.verify(req.body.cook.auth, "sourav404");
        if (decode) {
          Postdata.find().then((d) => {
            res.send(d);
          });
        } else {
          res.send({ auth: false });
        }
      } catch (error) {
        res.send({ auth: false });
        return false;
      }
    } else {
      res.send({ auth: false });
      return false;
    }
  } else {
    res.send({ error: "invalid request" });
  }
}
