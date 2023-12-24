import "./register.scss";

import { motion } from "framer-motion";

function _Register() {
  return (
    <motion.form
      className="Register"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.3 }}
      key={"2"}
      onSubmit={() => {}}
    >
      <h2>Register</h2>

      <input type="text" id="" placeholder="Username" />
      <input type="text" id="" placeholder="Password" />

      <div>
        <input type="text" id="" placeholder="Password" />
        <input type="text" id="" placeholder="Confirm Password" />
      </div>

      <button type="submit">Register</button>
    </motion.form>
  );
}

export default _Register;
