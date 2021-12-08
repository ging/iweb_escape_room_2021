////////////////////////////////////////////////////////////////
//     _   _  _____     _____  _____  ___    _____  ___       //
//    ( ) ( )(  _  )   (_   _)(  _  )(  _`\ (  _  )|  _`\     //
//    | `\| || ( ) |     | |  | ( ) || ( (_)| (_) || (_) )    //
//    | , ` || | | |     | |  | | | || |  _ |  _  || ,  /     //
//    | |`\ || (_) |     | |  | (_) || (_( )| | | || |\ \     //
//    (_) (_)(_____)     (_)  (_____)(____/'(_) (_)(_) (_)    //
//                                                            //
////////////////////////////////////////////////////////////////


import React from "react";
import BombComponentList from "../BombComponentList";
import propTypes from "prop-types";
import { Link } from "react-router-dom";
import ProgressBar from "../ProgressBar";

export default class Screen2 extends React.Component {
 
  render() {
    return (
      <div className="inside" id="screen2">
        <p>
          পরবর্তী ধাপে এগিয়ে যাওয়ার জন্য আপনাকে BombComponentList এ সমস্ত
          BombComponents রেন্ডার করতে হবে। এই জন্য আপনি মানচিত্র ফাংশন ব্যবহার
          করতে পারেন। আপনি যদি সঠিকভাবে এই বার্তাটি বুঝতে না পারেন তবে
          স্প্যানিশের পরিবর্তে এটি ইংরেজিতে অনুবাদ করুন।
        </p>
        <BombComponentList components={this.props.components} turnOffComponent={this.props.deac}/>
        <p className="next2">
          {"oUhhcyBkZXNhY3RpdmFkbyB0b2RvcyBsb3MgY29tcG9uZW50ZXMgZGUgbGEgYm9tYmEh".unhashCode()}
        </p>
        <p className="next2-w">
          {"RVJST1I6IERlYmVzIGRlc2FjdGl2YXIgbG9zIGNvbXBvbmVudGVzIGVuIGVsIG9yZGVuIGNvcnJlY3RvIQ==".unhashCode()}
        </p>
        <div className="actions">
          <Link to={`/${"1".hashCode()}`}>
            <button className="btn secondary">ANTERIOR</button>
          </Link>
        </div>
        <ProgressBar progress={50}/>
      </div>
    );
  }
}

Screen2.propTypes = {
  /**
   * Components of the bomb
   */
  components: propTypes.arrayOf(
    propTypes.shape({
      /**
       * Current status of the switch
       */
      status: propTypes.bool,
      /**
       * Name of the component to deactivate
       */
      id: propTypes.String
    })
  ),
  /**
   * Function to turn off the switch
   */
  deac: propTypes.func,
};
 
