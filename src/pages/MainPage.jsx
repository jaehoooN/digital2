import { Link } from 'react-router-dom';
import accountsRaw from '../data/accounts';

const accounts = [
  ...accountsRaw.filter(acc => acc.title === "디지털본부장"),
  ...accountsRaw.filter(acc => acc.title !== "디지털본부장")
];

export default function MainPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-8 text-center bg-gray-50 px-4">
      <h1 className="text-3xl font-bold">문서협업툴 데모버전 운영</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {accounts.map((account) => (
          <Link
            key={account.route}
            to={`/account/${account.route}`}
            className="px-6 py-4 bg-blue-600 text-white rounded shadow hover:bg-blue-700 text-lg font-semibold"
          >
            {account.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
