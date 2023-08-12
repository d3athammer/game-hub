
import { Button, Collapse, Text } from '@chakra-ui/react';
import { ReactNode, useState } from 'react'

interface Props{
  children: string;
}


const ShowMore = ({ children }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const limit = 300
  if (!children) return null;
  if (children.length <= limit) return <Text>{children}</Text>;
  const summary = isExpanded ? children : `${children.substring(0, limit)}...`;

  return (
    <>
      <Text>
        {summary}
        <Button size="xs" ml={2} colorScheme='yellow' onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? "Show Less" : "Show More"}
        </Button>
      </Text>
    </>
  );
}

export default ShowMore;
