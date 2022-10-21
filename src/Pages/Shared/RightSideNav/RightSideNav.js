import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGithub, FaGoogle } from "react-icons/fa";

const RightSideNav = () => {
    return (
        <div>
                    <ButtonGroup vertical>
            <Button className='mb-2' variant="primary"><FaGoogle/> Login with Google</Button>
            <Button variant="dark"><FaGithub/>Login With GIthub</Button>

            </ButtonGroup>
          
        </div>
    );
};

export default RightSideNav;