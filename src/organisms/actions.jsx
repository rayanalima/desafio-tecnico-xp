import React from 'react';
import MyActions from '../molecules/Actions/MyActions';
import ActionsFree from '../molecules/Actions/ActionsFree';
import DepositButton from '../atoms/Actions/DepositButton';

function UserActions() {
  return (
    <>
    <MyActions />
    <ActionsFree />
    <DepositButton />
    </>
  );
}

export default UserActions;
