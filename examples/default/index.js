import {
  IcBook,
  IcCalendar,
  FaBook,
  FaGithubLogo
} from './components/Icons';

const MyIcons = () => (
  <div className="MyIcons">
    <IcBook size={10} />
    <IcCalendar size={20} />
    <FaBook style={{ fill: 'red' }} />
    <FaGithubLogo style={{ fill: 'green' }} />
  </div>
);
