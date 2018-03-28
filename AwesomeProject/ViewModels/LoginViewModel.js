

import React, { Component } from 'react';
import LoginInfo from "../Models/LoginInfo"
import { Platform, NavigatorIOS } from 'react-native'

export interface RefreshDelegate {
  refreshScreen(): void
}

export default class LoginViewModel {

   static instructions = Platform.select({
        ios: 'Press Cmd+R to reload,\n' +
          'Cmd+D or shake for dev menu',
        android: 'Double tap R on your keyboard to reload,\n' +
          'Shake or press menu button for dev menu',
      });
      
     arrInfo:[LoginInfo] = []
     delegate: RefreshDelegate = null

    constructor() {
        this.info = new LoginInfo("Welcome to React-Native Vishal","MobileProgramming")
    }

    callWebserviceToLoadData() {
        this.arrInfo.push(new LoginInfo("Start 2nd Chapter","Chapter 2"))
        
        if (this.delegate != null) {
            this.delegate.refreshScreen()
         }
    }

    getTitleMessage() {
        if (this.arrInfo.length > 0)
         return this.arrInfo[0].textMessage
        
         return "... Loading Content ..."
    }

    getSubTitleMessage() {
        if (this.arrInfo.length > 0)
         return this.arrInfo[0].textValue
        
         return "... Loading subtitle ..."
    }
}

