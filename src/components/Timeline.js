import React, { Component } from 'react';
import { Timeline, Icon } from 'antd';

export default class timeline extends Component {
	render() {
		
		return (
			
			<section id="timeline" style= {{ background: "#fafbff" }}>
				<div className="row">
					<div className="twelve columns collapsed">
						<h1>Timeline</h1>
						<Timeline mode="alternate" >
							
							{ <Timeline.Item style={{ fontSize: '15px' }}>
								Create a services site 07-21-2020
							</Timeline.Item> }

						</Timeline>
						
					</div>
					
				</div>
			</section>
			
		);
	}
}