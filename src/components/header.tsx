'use client'

import { 
    Avatar, 
    AvatarBadge, 
    AvatarGroup,
    Flex,
    HStack,
    Heading,
} from '@chakra-ui/react';
import { Link } from '@chakra-ui/next-js';

export function Header() {
  return (
    <Flex minWidth='max-content' marginLeft='50px' marginRight='50px' marginTop='20px' alignItems='center' gap='2'>
        <HStack>
            <Avatar
                size='lg'
                name='David Yee'
                src='/profile.jpg'
            />
            <Heading size='lg'>
                David's Personal Website
            </Heading>
        </HStack>
    </Flex>
  );
};
