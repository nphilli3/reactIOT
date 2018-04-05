// Import React and Reactstrap
import React, { Component } from 'react';


const Suggestions = () => {
    return (
      <div class="form-group">
        <form action=''>
          <label htmlFor="suggestion" id='suggestion'>Tell us how we can improve the center, all suggestions are welcome!</label>
          <textarea className="form-control" rows="10" id="suggestiont"></textarea>
          <div className='text-right' id='save'>
            <button type="submit" formmethod="post" class="save">Save</button>
          </div>
        </form>
      </div>
    );
  }

export default Suggestions;