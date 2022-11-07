import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

export function LeftMenu(props) {
    
    return (
        <div>
            <ButtonGroup vertical className='w-100'>
                <Button active={props.isActive.at(0)}>Договор оказания услуг</Button>
                <Button active={props.isActive.at(1)}>Договор по закупке услуг</Button>
                <Button active={props.isActive.at(2)}>Список предоставляемых услуг</Button>
                <Button active={props.isActive.at(3)} className={'btn-warning'}>Купить</Button>
            </ButtonGroup>
        </div>
    );
}

export default LeftMenu;