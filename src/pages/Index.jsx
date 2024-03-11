import React from "react";
import { Box, Container, Stack, Heading, Text, Button, Image, VStack, HStack, Link, Icon, SimpleGrid } from "@chakra-ui/react";
import { FaLinkedin, FaInstagram, FaEnvelope, FaRegBuilding } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8} as="header">
        <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMFNvd3JhYmhhJTIwUHJha2FzaHxlbnwwfHx8fDE3MTAxNDkzOTR8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Sowrabha Prakash" />
        <Heading as="h1" size="xl">
          Sowrabha Prakash
        </Heading>
        <Text fontSize="lg" color="gray.600">
          Architect & Urban Planner based in India
        </Text>
        <HStack spacing={4}>
          <Link href="mailto:sowrabhaprakash@example.com" isExternal>
            <Button leftIcon={<FaEnvelope />} colorScheme="teal" variant="solid">
              Contact
            </Button>
          </Link>
          <Link href="https://linkedin.com/in/sowrabha" isExternal>
            <Button leftIcon={<FaLinkedin />} colorScheme="blue" variant="outline">
              LinkedIn
            </Button>
          </Link>
          <Link href="https://instagram.com/sowrabha" isExternal>
            <Button leftIcon={<FaInstagram />} colorScheme="pink" variant="outline">
              Instagram
            </Button>
          </Link>
        </HStack>
      </VStack>

      <Stack as="section" spacing={8} my={12}>
        <Heading as="h2" size="lg">
          About Me
        </Heading>
        <Text color="gray.700" fontSize="md">
          With over a decade of experience in the architecture industry, I have honed my skills in designing sustainable and innovative structures that blend with their surroundings while making a statement. From residential projects to commercial hubs, my work is a testament to my passion for creating spaces that inspire and empower communities.
        </Text>
      </Stack>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} as="section" my={12}>
        <Box>
          <Icon as={FaRegBuilding} w={10} h={10} color="teal.500" />
          <Heading as="h3" size="md" mb={3}>
            My Projects
          </Heading>
          <Text color="gray.700" fontSize="md">
            Explore a selection of my projects spanning various domains of architecture and urban planning. Each project showcases a commitment to environmental sustainability and innovative design.
          </Text>
        </Box>
        <Image borderRadius="md" src="https://images.unsplash.com/photo-1617243859947-0cb5730dd993?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmFsJTIwcHJvamVjdHxlbnwwfHx8fDE3MTAxNDkzOTR8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Architectural Project" />
      </SimpleGrid>

      <Stack as="footer" spacing={4} mt={24} textAlign="center">
        <Text fontSize="sm" color="gray.600">
          &copy; {new Date().getFullYear()} Sowrabha Prakash. All rights reserved.
        </Text>
      </Stack>
    </Container>
  );
};

export default Index;
