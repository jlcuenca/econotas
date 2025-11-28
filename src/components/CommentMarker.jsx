import React from 'react';
import { formatTimestamp } from '../utils/userUtils';

const CommentMarker = ({ comment, duration, onSeek }) => {
    // Calculate position as percentage of total duration
    const position = duration > 0 ? (comment.timestamp / duration) * 100 : 0;

    const handleClick = (e) => {
        e.stopPropagation();
        onSeek(comment.timestamp);
    };

    return (
        <div
            className="absolute top-1/2 -translate-y-1/2 group cursor-pointer z-10"
            style={{ left: `${position}%` }}
            onClick={handleClick}
        >
            {/* Marker dot */}
            <div
                className="w-3 h-3 rounded-full border-2 border-white shadow-lg transition-transform group-hover:scale-150"
                style={{ backgroundColor: comment.userColor }}
            />

            {/* Tooltip */}
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <div className="bg-slate-900 text-white text-xs rounded-lg px-3 py-2 shadow-xl border border-slate-700 whitespace-nowrap max-w-xs">
                    <div className="font-semibold text-indigo-300 mb-1">
                        {comment.userName}
                    </div>
                    <div className="text-slate-400 mb-1 font-mono">
                        {formatTimestamp(comment.timestamp)}
                    </div>
                    <div className="text-slate-200 truncate">
                        {comment.text}
                    </div>
                    {/* Arrow */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px">
                        <div className="w-2 h-2 bg-slate-900 border-r border-b border-slate-700 transform rotate-45" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CommentMarker;
