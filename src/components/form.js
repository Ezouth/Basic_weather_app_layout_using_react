import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <div className="Form">
       {/* TODO: Change on submit method properly */}
        <form onSubmit="">
          <input type="text" name="city" placeholder="City..." />
          <input type="text" name="country" placeholder="Country..." />
          <input type="submit" value="Get Weather" />
        </form>
      </div>
    );
  }
}

export default Form;
