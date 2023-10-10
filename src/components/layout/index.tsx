import classNames from 'classnames';
import Button from '../button';
import { useState } from 'react';
import ReduxPage from '../../pages/redux';
import MobxPage from '../../pages/mobx';
import JotaiPage from '../../pages/jotai';

type PageType = 'redux' | 'mobx' | 'jotai';

const Layout = () => {
  const [selectedPage, setSelectedPage] = useState<PageType>('redux');

  const handleClickSelectPageBtn = (page: PageType) => () => {
    setSelectedPage(page);
  };

  return (
    <div id="layout" className="w-full h-full">
      <div
        className={classNames(
          'flex items-center gap-4',
          'w-full h-12 bg-indigo-300',
          'px-2'
        )}
      >
        <Button color="blue" onClick={handleClickSelectPageBtn('redux')}>
          redux
        </Button>
        <Button color="green" onClick={handleClickSelectPageBtn('mobx')}>
          mobx
        </Button>
        <Button color="orange" onClick={handleClickSelectPageBtn('jotai')}>
          jotai
        </Button>
      </div>
      <div
        className={classNames(
          'w-full h-[calc(100%-theme(space.12))] bg-indigo-50',
          'p-2'
        )}
      >
        {selectedPage === 'redux' && <ReduxPage />}
        {selectedPage === 'mobx' && <MobxPage />}
        {selectedPage === 'jotai' && <JotaiPage />}
      </div>
    </div>
  );
};

export default Layout;
