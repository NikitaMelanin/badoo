import React from 'react';

export class Endpoint
{
    static local = false;

    static loginRoute() {
        if(this.local) {
            return 'http://leenwood.loc/api/login_check';
        } else {
            return 'http://leenwood.space/api/login_check';
        }
    }

    static checkMeRoute() {
        if(this.local) {
            return 'http://leenwood.loc/api/user/check/me';
        } else {
            return 'http://leenwood.space/api/user/check/me';
        }
    }

    static registerUserRoute() {
        if(this.local) {
            return 'http://leenwood.loc/user/register';
        } else {
            return 'http://leenwood.space/user/register';
        }
    }
}