import React, { Component } from 'react';
import { Trail, animated } from 'react-spring'
import './Trails.css'

 class Trails2 extends Component {
    state = {
        toggle: true,
        items: ['item1', 'item2','item3','item4','item5']
    }

    toggle = () => {
        this.setState(state => ({ toggle: !state.toggle }))
    }

  render() {
    return (
      <div style = {{
          backgroundColor: '#247BA0',
          position: 'realtive',
          width: '100%',
          height: '100%'
      }}>

        <Trail
        //ganti onclick with scroll ?
        //bar is image or words? 
            native
            reverse={this.state.toggle}
            initial={null}
            items={this.state.items}
            from={{ opacity: 0, x: -100}}
            to={{ opacity: this.state.toggle? 1 : 0.75, x: this.state.toggle ? 0 : 100 }}
            > 
            {item =>({ x, opacity }) => (
                <animated.div className="boxTrails" onClick={this.toggle}
                    style={{
                        opacity,
                        transform: x.interpolate(x => `translate3d(${x}%,0,0)`)
                    }}
                />
            )}
        </Trail>
        
      </div>
    )
  }
}

export default Trails2;
