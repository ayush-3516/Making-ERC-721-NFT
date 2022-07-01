// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.col";
import "@openzeppelin/contracts/ERC721/extensions/ERC721URIStorage.sol";

contract NFTcontract is ERC721URIStorage, Ownable {}
