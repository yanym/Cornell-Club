import React, { Component } from 'react';
import { Timeline, Icon } from 'antd';

export default class timeline extends Component {
	render() {
		return (
			<section id="timeline">
				<div className="row">
					<div className="twelve columns collapsed">
						<h1>Timeline</h1>
						<Timeline mode="alternate" >
							<Timeline.Item style={{ fontSize: '18px' }}>
								Create a services site 2019-01-01
							</Timeline.Item>

							<Timeline.Item color="green" style={{ fontSize: '18px' }}>
								Solve initial network problems 2018-09-01
							</Timeline.Item >

							<Timeline.Item style={{ fontSize: '18px' }} dot={<Icon type="clock-circle-o" style={{ fontSize: '15px' }} />}>
								Buy a cow. 
							</Timeline.Item>

							<Timeline.Item color="red" style={{ fontSize: '18px' }}>
								Network problems being solved 2017-09-01
							</Timeline.Item>

							<Timeline.Item style={{ fontSize: '18px' }}>
								Create a services site 2016-09-01
							</Timeline.Item>

							<Timeline.Item style={{ fontSize: '18px' }} dot={<Icon type="clock-circle-o" style={{ fontSize: '15px' }} />}>
								Tech 2015-09-01
							</Timeline.Item>
						</Timeline>
					</div>
				</div>
			</section>
		);
	}
}