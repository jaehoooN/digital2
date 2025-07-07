import { useParams, Link } from 'react-router-dom';
import accountsRaw from '../data/accounts';

const accounts = [
  ...accountsRaw.filter(acc => acc.title === "디지털본부장"),
  ...accountsRaw.filter(acc => acc.title !== "디지털본부장")
];

export default function AccountPage() {
  const { name } = useParams();
  const account = accounts.find(acc => acc.route === name);

  if (!account) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-center">
        <h2 className="text-2xl font-bold mb-4">계정을 찾을 수 없습니다.</h2>
        <Link to="/" className="text-blue-500 underline">메인으로 돌아가기</Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-6 text-center px-4">
      <h1 className="text-3xl font-bold">{account.title}</h1>
      <a href={account.link} className="px-6 py-3 text-xl bg-blue-600 text-white rounded hover:bg-blue-700">
        앱 접속
      </a>
      <Link to="/" className="text-blue-500 underline">계정 전환</Link>
      <p className="text-sm text-gray-500 mt-4">
        *이 페이지는 데모버전이며, 정식 운영 시 모바일오피스를 통한 접속이 필요합니다
      </p>
    </div>
  );
}
