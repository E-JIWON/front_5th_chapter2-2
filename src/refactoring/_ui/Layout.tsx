import { memo } from 'react';

interface LayoutProps {
  isAdmin: boolean;
  onClickAdmin: () => void;
}

const Layout = ({ isAdmin, onClickAdmin }: LayoutProps) => {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">쇼핑몰 관리 시스템</h1>
        <button
          onClick={onClickAdmin}
          className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-blue-100">
          {isAdmin ? '장바구니 페이지로' : '관리자 페이지로'}
        </button>
      </div>
    </nav>
  );
};

export default memo(Layout);
