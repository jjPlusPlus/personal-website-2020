import React, { Component } from 'react';

class Timeline extends Component {
  render() {
    const { history, start, end } = this.props;
    const totalTime = end - start;
    return (
      <div className="timeline">

        <div className="timeline-bar">
          { history.map((time, index) => {
              return (
                <div className="timeline-bar--section" key={index}>
                  <div className="timeline-section-marker"><p>{time.name}: {time.start} - {time.end}</p></div>
                </div>
              )
            })
          }
        </div>
        <div className="timeline-markers">
          <span className="timeline-start-marker">{start}</span>
          <span className="timeline-end-marker">{end}</span>
        </div>

      </div>

    )
  }
}

export default Timeline
