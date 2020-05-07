import React, { Component } from 'react';
import { Container, Header, Content,Left, Body, Right, Title, Tab, Tabs } from 'native-base';
import Tab1 from './tabs/tab1';
import Tab2 from './tabs/tab2';
import Tab3 from './tabs/tab3';
import Tab4 from './tabs/tab4';

export default class TabsExample extends Component {
  render() {
    return (
      <Container>
        <Header style={{backgroundColor:'#006064'}} hasTabs>
            <Left/>
          <Body>
            <Title style={{color:'white'}}>News Glance</Title>
          </Body>
          <Right />
        </Header>
        <Tabs tabBarUnderlineStyle={{backgroundColor:'white'}}>
          <Tab tabStyle={{backgroundColor:'#006064'}} activeTabStyle={{backgroundColor:'#006064'}} textStyle={{color:'white'}} activeTextStyle={{color:'white'}} heading="General">
            <Tab1 />
          </Tab>
          <Tab tabStyle={{backgroundColor:'#006064'}} activeTabStyle={{backgroundColor:'#006064'}} textStyle={{color:'white'}} activeTextStyle={{color:'white'}} heading="Bollywood">
            <Tab2 />
          </Tab>
          <Tab tabStyle={{backgroundColor:'#006064'}} activeTabStyle={{backgroundColor:'#006064'}} textStyle={{color:'white'}} activeTextStyle={{color:'white'}} heading="Technology">
            <Tab3 />
          </Tab>
          <Tab tabStyle={{backgroundColor:'#006064'}} activeTabStyle={{backgroundColor:'#006064'}} textStyle={{color:'white'}} activeTextStyle={{color:'white'}} heading="Sports">
            <Tab4 />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}