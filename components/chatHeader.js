import Head from 'next/head';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const chatHeader = () => {
  return (
    <div>
      <main><br/>
        <div style={{width: 700, marginLeft: 450,  position: 'relative'}} className="navbar bg-base-100 drop-shadow-md rounded-t-md w-14">
          <div className='flex-1'>
            <div className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://placeimg.com/80/80/people" />
              </div>
            </div>
            <div style={{flexDirection: 'column', paddingLeft: 5}}>
              <div className='font-bold'>
                <a href="/">Name (Company)</a>
              </div>
              <div style={{fontSize: 12}}>
                Last seen 10 minutes ago
              </div>
            </div>
          </div>
          <div className="flex-none gap-2">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-6 rounded-full">
                    <MoreVertIcon />
                </div>
              </label>
              <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                <li><a>Archive Chat</a></li>
                <li><a>Block User</a></li>
                <li><a>Delete Chat</a></li>
                <li><a>Report User</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div style={{width: 700, marginLeft: 450, position: 'relative'}} className="navbar bg-base-100 drop-shadow-md rounded-b-md w-14">
            <div className='flex-1'>
                <div className="btn btn-circle btn-ghost avatar">
                <div className="w-10 rounded-md">
                    <img src="https://placeimg.com/80/80/people" />
                </div>
                </div>
                <div style={{flexDirection: 'column', paddingLeft: 5}}>
                <div>
                    <a href="/">
                        Mild Steel Channel Hot Rolled (Bar 0.750 x 0.375 x 0.125)
                    </a>
                </div>
                <div className='font-bold'>
                    Price
                </div>
                </div>
            </div>

        </div>
      </main>
    </div>
  )
}

export default chatHeader;
