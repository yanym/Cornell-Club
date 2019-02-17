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
							{/* <Timeline.Item style={{ fontSize: '15px' }}>
								Create a services site 2019-01-01
							</Timeline.Item> */}

							<Timeline.Item color="green" style={{ fontSize: '13px' }}>
								Runqian Huang, our alumnus, started his job 02/09/2019
							</Timeline.Item >

							{/* <Timeline.Item style={{ fontSize: '15px' }} dot={<Icon type="clock-circle-o" style={{ fontSize: '15px' }} />}>
								Buy a cow. 
							</Timeline.Item> */}

							<Timeline.Item color="red" style={{ fontSize: '13px' }}>
								Rongguang Wang, our alumnus, got PhD offer from 02/07/2019 
							</Timeline.Item>

							<Timeline.Item style={{ fontSize: '13px' }}>
								Quantitative Research Club got officially approved by Cornell 01/30/2019 
							</Timeline.Item>

							<Timeline.Item style={{ fontSize: '13px' }} dot={<Icon type="clock-circle-o" style={{ fontSize: '13px' }} />}>
								Web Prototype 11/18/2018
							</Timeline.Item>
						</Timeline>
					</div>
				</div>
			</section>
		);
	}
}