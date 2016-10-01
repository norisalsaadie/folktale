//----------------------------------------------------------------------
//
// This source file is part of the Folktale project.
//
// See LICENCE for licence information.
// See CONTRIBUTORS for the list of contributors to the project.
//
//----------------------------------------------------------------------

const raise = (error) => { throw error };

const defer = typeof setImmediate !== 'undefined' ?  setImmediate
            : typeof process !== 'undefined'      ?  process.nextTick
            : /* otherwise */                        setTimeout;

module.exports = defer;