import AgentType from '../enums/AgentType.enum';
import File from './File.type';
import Link from './Link.type';

type Message = {
    id: string;
    content: string;
    agentType?: AgentType;
    own: boolean;
    files?: File[];
    links?: Link[];
};

export default Message;
