import React from 'react';

export class Endpoint
{
    static local = true;

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
}