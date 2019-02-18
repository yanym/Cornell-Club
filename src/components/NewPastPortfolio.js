import React, { Component } from 'react';
import { List, Avatar, Icon } from 'antd';

export default class Porfolio extends Component {
	render() {
		let webData = this.props.webData;

		const listData = [];
		for (let i = 0; i < webData.PastPortfolio.length; i++) {
			listData.push({
				href: `${webData.PastPortfolio[i].url}`,
				title: `${webData.PastPortfolio[i].name}`,
				description: `${webData.PastPortfolio[i].description}`,
				content: `${webData.PastPortfolio[i].content}`,
				imgurl: `${webData.PastPortfolio[i].imgurl}`,
				// avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
			});
		}

		// const IconText = ({ type, text }) => (
		//   <span>
		//     <Icon type={type} style={{ marginRight: 8 }} />
		//     {text}
		//   </span>
		// );

		return (
			<section id="portfolio" style={{ background:'#fafffc' }}>
				<div className="row">
					<div className="twelve columns" >
						<h1>Past Work</h1>
							<List
								itemLayout="vertical"
								size="default"
								pagination={{
									onChange: (page) => {
											console.log(page);
									},
									pageSize: 3,
								}}
								dataSource={listData}
								// footer={<div><b>ant design</b> footer part</div>}
								renderItem={item => (
									<List.Item
										key={item.title}
										// actions={[<IconText type="star-o" text="156" />, <IconText type="like-o" text="156" />, <IconText type="message" text="2" />]}
										extra={<img id='newportfolio_' width={400} alt="logo" src={item.imgurl} />}
										style={{ textAlign: "justify" }}
									>
									<List.Item.Meta
										// avatar={<Avatar src={item.avatar} />}
										title={<a href={item.href}>{item.title}</a>}
										description={item.description}
									/>
										{item.content}
									</List.Item>
								)}
							/>
					</div>
				</div>
			</section>
		);
	}
}
